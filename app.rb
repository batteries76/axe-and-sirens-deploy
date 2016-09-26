# app.rb
require 'sinatra'
require 'sinatra/reloader'
#require 'rack-cors'
require 'json'
#require 'jsonp'
#require 'pry'
#require 'thin'

# configure do
#   enable :cross_origin
# end

before do
   content_type :json
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
end

data = [
  {id: 11, name: 'Blue T-Shirt'},
  {id: 12, name: 'Green T-Shirt'},
  {id: 13, name: 'Red T-Shirt'},
  {id: 14, name: 'Yellow T-Shirt'},
  {id: 15, name: 'Purple T-Shirt'},
  {id: 16, name: 'Grey T-Shirt'},
  {id: 17, name: 'Pink T-Shirt'},
  {id: 18, name: 'White T-Shirt'},
  {id: 19, name: 'Black T-Shirt'},
  {id: 20, name: 'Orange T-Shirt'}
];

get '/dashboard' do
# get '/dashboard' do
  puts "hello world"
  return data.to_json
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/checkout' do
  erb :checkout
end

get '/faq' do
  erb :faq
end

get '/custromise' do
  erb :customise
end
