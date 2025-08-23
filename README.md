# backend-ecommerce-sample

Backend service for a e-commerce.

 - CRUD
 - Authentication

## Client Story
As the owner of an online store,
I want to build an e-commerce platform with user authentication,
so that customers can securely create accounts, log in, and make purchases while I can manage users and orders safely.

### User Stories
 - US01 - As a CLIENT I want to be able to access my cart.
 - US02 - As a CLIENT I want to be able to add products to my cart.

## Models/Tables
 - User
 - Product
 - Store

## Database Model
 - Product
    - Name [string]
    - Price [float]
    - Description [string]
    - Image (To do)
    - Store (To do )

## Simple Features
### 1. User Accounts
- Sign up with email and password
- Log in and log out

### 2. Product Catalog
- View a list of products
- View product details

### 3. Shopping Cart
- Add/remove products to/from cart
- View cart contents

### 4. Order Management
- Place orders
- View past orders

### 5. Admin/Owner Features (Optional for MVP)
- Add/edit/delete products
- View all orders

### 6. Authentication & Security
- Protect routes for logged-in users
- Hash passwords and secure sensitive data

## Check
 - [X] Basic CRUD
 - [ ] Authentication
