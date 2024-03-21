#!/bin/bash

# Function to commit changes, push, create pull request, and merge
commit_and_push() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin "$current_branch"
    read -p "Do you want to create a pull request? (yes/no): " create_pull_request
    if [ "$create_pull_request" = "yes" ]; then
        read -p "Enter user or admin for pull request: " mode
        if [ "$mode" = "admin" ]; then
            pull_request_url='https://github.com/dpgaire/my-assistant'
        else
            pull_request_url='https://github.com/Moru-Digital-Wallet/web-customer'
        fi
        xdg-open "$pull_request_url"
    fi
}

# Execute the function
commit_and_push
