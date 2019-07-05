class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  # unless：条件に一致しない場合のみばりテーション実行
  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader
end
