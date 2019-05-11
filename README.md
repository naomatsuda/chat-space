
# DB設計

## groups_users table

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :user
- has_many :group

## groups table

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :GroupsUsers
- has_many :users, through: :groups_users

## users table

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|email|text|null: false|
|password|text|null: false|

### Association
- has_many :GroupsUsers
- has_many :groups, through: :groups_users

## groups_users table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

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

* ... -->
