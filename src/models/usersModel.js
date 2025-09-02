import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR;

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        maxLength: 30
    },
    role: {
        type: String,
        required: true,
        default: "user"
    }
}, {timestamps: true});


// Middleware

usersSchema.pre('save', function(next){
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err) return next(err);
        
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);
            
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
}, {strict: true});

usersSchema.methods.comparePassword = function(candidatePassword){
    return bcrypt.compare(candidatePassword, this.password);
}


const Users = mongoose.model('users', usersSchema);
export default Users;
