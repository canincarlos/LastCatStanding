class WinnersController < ApplicationController
    def index
        @winners = Winner.all 
        render json: @winners
    end 

    def show
        @winner = Winner.find(params[:id])
        render json: @winner
    end 

    def create
        @secretMenuItem = Winner.create(
            menu_name: params[:menu_name],
            restaurant_name: params[:restaurant_name],
            menu_description: params[:menu_description]
        )
        render json: @winner
    end 

    def update
        @winner = Winner.find(params[:id])
        @winner.update(
            menu_name: params[:menu_name],
            restaurant_name: params[:restaurant_name],
            menu_description: params[:menu_description]
        )
        render json: @winner
    end 

    def destroy
        @winners = Winner.all 
        @winner = Winner.find(params[:id])
        @winner.destroy
        render json: @winners
    end 

end