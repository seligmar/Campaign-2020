class UsersController < ApplicationController
  def index
    users = User.all 
    render json: users
  end 

  def validate_new 
    user = get_current_user
    if user 
      render json: { username: user.username, token: issue_token({ id: user.id })}
    else 
      render json: { error: 'invalid token' }, status: 400 
    end 
  end 

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password]) || user = get_current_user 
      render json: { username: user.username, token: issue_token({id: user.id})}  
    else 
      render json: {error: 'username and password combination invalid'}, status: 401
    end 
  end 

  def create_new_user 
    user = User.new(username: params[:username], password: params[:password], emailaddress: params[:emailaddress])
    if user.save
        render json: { username: user.username, token: issue_token({id: user.id})}, status: :create
    else 
      if (user.errors.full_messages[0] === 'Username has already been taken')
        render json: {error: 'username and password combination invalid'}
      else 
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end 
  end 

  end 



  private 

  def user_params 
    params.require(:user).permit(:username, :password, :emailaddress)
  end 

end
