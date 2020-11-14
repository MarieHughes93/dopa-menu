class Api::V1::MenuItemsController < ApplicationController
    before_action :authorized
    
    def index
        @menu_items = @user.menu_items
        render json: {menuItems: @menu_items, user: @user, auth: true, error: false, heading: "Fetch Complete", message: "Menu items were all collected"}
    end

    def show
        if @item= @user.menu_items.find(params[:id])
            render json: {menuItem: @item, user: @user, auth: true, error: false, heading: "Fetch Complete", message: "Item's info retrieved"}
        else
            render json: {menuItem: nil, user: @user, auth: true , error: true , heading: "Opps...", message: "We ran into an error loading your selection. Please try again."}
        end
    end

    def create
        @item =  @user.menu_items.create(menu_params)
        
        if @item.valid?
            render json: {menuItem: @item, user: @user, auth: true, error: false, heading: "New Item!", message: "A new item has been added to your collection."}
        else
            render json: {menuItem: nil, user: @user, auth: true, error: true, heading: "Opps...", message: "There was an issue creating your menu item. Please try again."}
        end
    end
    
    def update
        @item = @user.menu_items.find_by(id: params[:id])
        
        if @item.update(menu_params)
            render json: {menuItem: @item, user: @user, auth: true, error: false, heading:"Updated!", message: "The menu option was successfully updates!"}
        else
            render json: {menuItem: @item , user: @user, auth: true, error: true, heading:"Opps..", message: "There was an issue updating your menu item. Please try again."}
        end
    end
    
    def destroy
        @item = @user.menu_items.find_by(id: params[:id])
        if @item.destroy
            render json: {menuItem: nil, user: @user, auth: true, error: false, heading: "MenuItem Deleted!", message: "The item yo requested deleted was successfully removed."}
        else
            render json: {menuItem: @item, user: @user, auth: true, error: true ,heading: "Opps...", message: "We can into an issue deleting your menu item."}
        end
    end

    private
    
    def menu_params
        params.require(:menu_item).permit(:title, :category, :description, :user_id)
    end
end