
## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the [server](http://_vscodecontentref_/9) directory:
    ```sh
    cd server
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a [.env](http://_vscodecontentref_/10) file in the [server](http://_vscodecontentref_/11) directory and add the following:
    ```env
    PORT=8090
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:8090`.

## API Endpoints

### User Endpoints

- **Signup**
    - `POST /user/signup`
    - Request body: `{ "email": "user@example.com", "password": "password" }`

- **Login**
    - `POST /user/login`
    - Request body: `{ "email": "user@example.com", "password": "password" }`

- **Get All Users**
    - `GET /user`

- **Delete User**
    - `DELETE /user/delete/:id`

### Company Endpoints

- **Create Company**
    - `POST /company`
    - Request body: `{ "name": "Company Name", "description": "Company Description", "location": "Location", "website": "Website", "contact_email": "Contact Email" }`

- **Get All Companies**
    - `GET /company`

- **Get Company by ID**
    - `GET /company/:id`

- **Update Company**
    - `PUT /company/:id`
    - Request body: `{ "name": "Company Name", "description": "Company Description", "location": "Location", "website": "Website", "contact_email": "Contact Email" }`

- **Delete Company**
    - `DELETE /company/:id`

## License

This project is licensed under the MIT License.