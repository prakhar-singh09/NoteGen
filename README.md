<p align="center"><img src="https://socialify.git.ci/prakhar-singh09/NoteGen/image?description=1&descriptionEditable=This%20repository%20contains%20the%20code%20for%20a%20Note%20Generation%20App%20built%20using%20the%20MERN%20stack%20and%20OpenAI.&font=Bitter&issues=1&language=1&name=1&owner=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Dark" alt="hoolichat-api" width="640" height="320" /></p>


<h1 align="center">
   💻 NoteGen
</h1>



## ⚡Technology Stack

### [NodeJS](https://nodejs.org/)
### [MongoDB](https://www.mongodb.com/)
### [Express](http://expressjs.com/)
### [ReactJS](https://react.dev/)

## Features

- Create, Read, Update, and Delete (CRUD) operations for efficient note management.
- User-friendly interface built with React.js for a seamless experience.
- Utilizes MongoDB for scalable and flexible data storage.
- Express.js backend for handling API requests.
- Node.js for server-side runtime, ensuring smooth performance.
- JWT for secure and seamless Authentication and Authurization.
- AI-generated content: Additionally, this app incorporates AI-generated content for enhanced note suggestions or auto-completion, leveraging cutting-edge natural language processing techniques.


## Getting Started

Clone the project

```bash
git clone https://github.com/prakhar-singh09/NoteGen.git
```
### FrontEnd

Go to the project directory

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start the react script

```bash
npm start
```

### Backend

Go to the Backend directory

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### FrontEnd

- `REACT_APP_URL`

### BackEnd

- `PORT`
- `JWT_SECRET`
- `MONGOURI`
- `OPENAI_API_KEY`



## API Reference

#### signup

```http
POST /api/auth/createuser/
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |

#### Body
`Raw(json)`

```
{
    "name":"",
    "email":"",
    "password":""
}
```

#### login

```http
POST /api/auth/login
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |

#### Body
`Raw(json)`

```
{
    "email":"",
    "password":""
}
```




#### Get all Notes

```http
GET /api/notes/fetchallnotes
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |
| `auth-token` | `Your Auth token` |


####  Create a Note

```http
POST /api/notes/addnote/
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |
| `auth-token` | `Your Auth token` |

#### Body

`Raw(json)`

```
{
    "title":"",
    "description":"",
    "tag":""

}
```


####  Edit a Note

```http
PUT /api/notes/updatenote/:id
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |
| `auth-token` | `Your Auth token` |

#### Body

`Raw(json)`

```
{
    "title":"",
    "description":"",
    "tag":""

}
```
####  Delete a Note

```http
DELETE /api/notes/deletenote/:id
```
#### Request Headers

| Parameter | Type     |
| :-------- | :------- | 
| `Content-Type` | `application/json` |
| `auth-token` | `Your Auth token` |

#### Body

`Raw(json)`

```
{
    "title":"",
    "description":"",
    "tag":""

}
```

## ScreenShot
![image](https://github.com/prakhar-singh09/NoteGen/blob/main/frontend/src/components/assets/FeatureImg.png)


Contributing:
Contributions are welcome! Feel free to submit issues or pull requests.

License:
This project is licensed under the MIT License.
