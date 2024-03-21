#!/bin/bash

#pull_btn: x:1141 y:336 screen:0 window:71303217
#descriptions: x:640 y:600 screen:0 window:71303217
#create-a-pull-request: x:1139 y:881 screen:0 window:71303217
#merge-pull-resquest: x:517 y:833 screen:0 window:71303217
#confirm_merge: x:491 y:861 screen:0 window:71303217
#finally_control: x:491 y:861 screen:0 window:71303217
#why 

# Function to simulate a key press.
simulate_key_press() {
    xdotool key --clearmodifiers "$1"
    sleep 0.5
}

# Function to simulate a mouse click.
simulate_mouse_click() {
    xdotool mousemove --sync "$1" "$2" click 1
    sleep 1
}

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
            sleep 4
            simulate_mouse_click 1141 336
            sleep 1
            simulate_key_press "Return"
            sleep 3
            simulate_mouse_click 640 600
            sleep 1
            xdotool type "this is the static description"
            sleep 2
            simulate_mouse_click 1139 881
            sleep 1
            simulate_key_press "Return"
            sleep 2
            simulate_mouse_click 517 833
            sleep 1
            simulate_key_press "Return"
            sleep 2
            simulate_mouse_click 491 861
            sleep 1
            simulate_key_press "Return"
            sleep 1
            simulate_mouse_click 491 861
            sleep 1
            simulate_key_press "Return"
            sleep 3
            xdotool key ctrl+w
            sleep 2
            xdotool key alt+tab
        else
            pull_request_url='https://github.com/web-customer'
        fi
        xdg-open "$pull_request_url"
    fi
}

# Execute the function
commit_and_push
