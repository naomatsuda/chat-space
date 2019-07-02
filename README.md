
# DB設計

## messages table

|Column|Type      |Options                       |
|------|----------|------------------------------|
|body  |text      |                              |
|image |string    |                              |
|user  |references|null: false, foreign_key: true|
|group |references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups table

|Column|Type|Options                 |
|------|----|------------------------|
|name  |text|null: false, index: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages

## users table

|Column  |Type|Options    |
|--------|----|-----------|
|name    |text|null: false|
|email   |text|null: false|
|password|text|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages

## groups_users table

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|group |references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

-->
