#!/bin/bash

# Function to commit changes, push, create pull request, and merge
#installing hub.
commit_and_push_to_staging() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin $current_branch
    git checkout staging_deploy_branch
    git pull origin staging_deploy_branch
    read -p "Enter a branch name: " branch_name
    git for-each-ref --format='%(refname:short) %(authorname) %(authordate:short) %(contents:subject)' refs/remotes/ --sort=-authordate | grep "$(git config user.name)"
    git merge $branch_name
    git push origin staging_deploy_branch
    deploy-staging
    # send_message
}

# Execute the function
commit_and_push_to_staging
