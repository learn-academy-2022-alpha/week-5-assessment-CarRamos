# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.



# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'

# so my thinking is to find a method that will iterate through the array for a matching element
# create a variable 
# give it a function that takes in a variable 
# returns a array of values that have the element

drank = []
beverages_array.each do |s|
  if letter_o
    return s 
  end
end


# print frameworks.select {|i| beverages_array.find == {letter_o}

# same

# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

drank = []
beverages_array_t.each do |s|
  if letter_t
    return s 
  end
end



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# nums_array1 = [42, 7, 27]
# # Expected output: 76

# create a variable 
# give it a function that takes in a variable and adds it to the last value
# use the .each method to iterate through the array
# returns a array of values that have the element

sum_of_each.each do |s|
    s.each { |a| sum+=a }
    end
end

# # nums_array2 = [25, 17, 47, 11]
# Expected output: 100





# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.


# create a class called Bike
# give it the model,wheels,current_speed parameters 
# define a variable that takes in all those and returns a string
# create a method that take the value from the current_speed value and adds it to the given variable 
#create the brake variable 
# pass in argurments to change them
class Bike
    def initialized(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def get_info  
        "#{@model} has #{@wheels} and is at a current speed of #{current_speed}."  
    end  
    def pedal_faster(num)
        num + @current_speed
    end
    def brake(num)
        num - @current_speed
    end
end

my_bike = BeachCruzer.new("Swweet", 2)
my.bike.pedal_faster(10)
my_bike.pedal_faster(28)
my_bike.brake(5)
my_bike.brake(25)


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
