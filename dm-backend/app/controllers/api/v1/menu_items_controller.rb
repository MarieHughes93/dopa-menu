class Api::V1::MenuItemsController < ApplicationController
    before_action :authorized
    
    def index
        @items = @user.menu_items
        render json: @items
    end

    def show
        @item = MenuItem.find(params[:id])
        render json: @item
    end

    def create
        @item = MenuItem.new(menu_params)
        if @item.save
            render json @item
        else
            render json: {error: 'There was an issue creating your menu item. Please try again.'}
        end
    end
    
    def update
        @item = MenuItem.find(params[:id])
        if @item.update(menu_params)
            render json: @item
        else
            render json: {error: 'There was an issue updating your menu item. Please try again.'}
        end
    end
    
    def destroy
        @item = MenuItem.find(params[:id])
        @item.destroy
        render json: {menu_itemId: @item.id}
    end

    private
    
    def menu_params
        params.require(:menu_item).permit( :title, :category, :descripton, :user_id)
    end
end