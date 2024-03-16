#!/bin/bash

# Function to commit changes, push, create pull request, and merge
commit_and_push_to_staging() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin $current_branch
    hub pull-request -m "$commit_message" -b staging_deploy_branch
    hub merge
    deploy-staging
    # send_message
}

# Execute the function
commit_and_push_to_staging
