---
title: "Quotes API"
summary: "Access a vast collection of motivational quotes designed to enhance your applications."
date: "Oct 10, 2024"
draft: false
tags:
- HTML
- Javascript
- Express.js
- CSS
demoUrl: https://qapi.vercel.app/
repoUrl: https://github.com/theriturajps/Quotes-API
---

A free and open API providing a rich collection of motivational quotes to inspire and uplift users in your applications.

![Quotes API Preview](https://github.com/user-attachments/assets/b989a196-34e8-4b42-9e9a-9351608a2248)

### Get a Random Quote

```
GET https://qapi.vercel.app/api/random
```

This will return a JSON response with a random quote and its author.

### Get All Quotes

```
GET https://qapi.vercel.app/api/quotes
```

This will return a JSON response with all quotes in the collection.

### Get Quote by ID

```
GET https://qapi.vercel.app/api/quotes/{id}
```

Replace `{id}` with the specific ID of the quote you want to fetch. This will return a JSON response with the quote and its author.

## Example Responses

### Random Quote

```json
{
    "id" : 1, 
    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer"
}
```

### All Quotes

```json
[
    {
        "id": 1,
        "quote": "The best way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "id": 2,
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "author": "Winston Churchill"
    },
    {
        "id": 3,
        "quote": "Don’t let yesterday take up too much of today.",
        "author": "Will Rogers"
    }
]
```

### Quote by ID

```json
{
    "id": 1,
    "quote": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
}
```

## Rate Limiting
- **Window Duration**: 15 minutes
- **Maximum Requests**: 200 requests per IP within the window duration
- **Response on Limit Exceed**: A 429 Too Many Requests status code with the following JSON response

```json
{
  "message": "Too many requests from this IP, please try again after 15 minutes"
}
```

## Installation

1. Clone this repository:
```
git clone https://github.com/theriturajps/quotes-api.git
```
2. Go inside Folder
```
cd quotes-api
```
3. Install the dependencies:
```
npm install
```
3.Start the server:
```
npm start
```
