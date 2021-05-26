class ItemsController < ApplicationController
    
    # rails server side rendering a react page 
    def app
       render component: "App"
    end

    def index
       @items = Item.order(likes: :desc)

       #this is what ahave done server side rendering a react page 
       # render component: "Items", props: {items:@item}

       # render json
       render json: @items
    end

    def create
       @item = Item.new(item_params)
       if(@item.save)
        # redirect to index ssrr
         render json: @item
       else
         # give back a 422 error with the error messages
         # 4XX - client error
         # 422 - saying client gave you bad input
         render json:  @item.errors.full_messages, status: :unprocessable_entity
       end
    end

    private

    def item_params
       params.require(:item).permit(:name, :description, :likes, :category)
    end
end
