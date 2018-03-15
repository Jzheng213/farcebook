class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(wall_owner_id: params[:wall_owner_id])
    render :index
  end

  def friends_posts
    user = User.find(params[:current_user_id])
    newsfeed_post_author_ids = user.get_friends.pluck(:id)
    newsfeed_post_author_ids << params[:current_user_id]

    @posts = Post.where(author_id: newsfeed_post_author_ids)
    render :index
  end

  def show
    debugger
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    @post.author = current_user

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post.find(params[:id])
    if @post.save
      render 'api/post/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:body, :content, :wall_owner_id, :current_user_id)
  end
end
