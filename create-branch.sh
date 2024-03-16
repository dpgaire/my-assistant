#!/bin/bash

# Function to create a new branch
create_new_branch() {
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    if [ "$current_branch" != "master" ]; then
        git checkout master  # Switch to the master branch
        git pull origin master  # Pull the latest changes from the master branch
    fi
    read -p "Enter the name of the new branch: " new_branch_name
    git checkout -b $new_branch_name  # Create a new branch and switch to it
}

# Execute the function to create a new branch
create_new_branch

