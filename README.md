# Places Visited Project

## Author Name
Maina Ann

## Project Overview

**Places Visited** is a beginner-friendly JavaScript web application that allows users to record places they have visited. Users can add details such as the location, landmark, time of visit, notes, and optionally media (photos/videos). Saved places are displayed in a history list where they can be viewed and deleted.

This project focuses on practicing **JavaScript fundamentals**, especially:

* Constructors
* Prototypes
* Event handling
* DOM manipulation

---

## Features

*  Add a new destination using a form
*  Save notes for each destination
*  (Optional) Add photos or videos as links
* View all saved destinations in a **Places History** section
*  Delete a destination from the history
*  Data persists during the session (and can be extended to localStorage)

---

## Project Structure

```
places-visited/
│
├── index.html        
├── script.js         # JavaScript logic (constructors, prototypes, events)
├── styles.css        # (Optional) Styling
└── README.md         # Project documentation
```

---

## How the Project Works

### 1️⃣ Constructor (Data Model)

A constructor function is used to create destination objects.
Each destination stores:

* location
* landmark
* time
* notes
* (optional) media

Every time the user submits the form, a **new instance** of a destination is created.

---

### 2️⃣ Prototypes (Behavior)

Prototypes are used to define behaviors shared by all destinations, such as:

* Displaying a destination in the list

This keeps the code clean and avoids repetition.

---

### 3️⃣ Event Handling

The app uses event listeners to:

* Handle form submission
* Prevent page refresh
* Respond to delete button clicks

Example events used:

* `DOMContentLoaded`
* `submit`
* `click`

---

### 4️⃣ DOM Manipulation

JavaScript dynamically:

* Reads values from form inputs
* Creates list items (`<li>`) for destinations
* Appends destinations to the **Places History** list
* Removes destinations when deleted

---

##  User Interface

### Input Section

Users fill in:

* Location
* Landmark
* Time
* Note

---

## How to Run the Project

1. Download or clone the project files
2. Open `index.html` in your browser
3. Fill in the form and click **Save / Record Destination**
4. View saved places in the Places History section

No server or installation required.

---

## Future Improvements

* Save destinations using local storage 
* Add media 
* Add google maps on it

---

##
