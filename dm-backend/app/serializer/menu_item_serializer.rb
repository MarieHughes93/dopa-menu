class MenuItemSerializer < ActiveModel::Serializer
    attributes :id, :title, :category, :description, :user_id
  end