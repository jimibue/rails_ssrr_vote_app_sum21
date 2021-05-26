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
end
