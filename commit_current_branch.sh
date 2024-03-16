#!/bin/bash

# Function to commit changes, push, create pull request, and merge
#installing hub.
#Use different appoaches to make changes
commit_and_push_to_staging() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin $current_branch
    xdg-open 'https://github.com/dpgaire/my-assistant'
}

# Execute the function
commit_and_push_to_staging
