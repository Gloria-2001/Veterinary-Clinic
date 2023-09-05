# Veterinary Clinic

## Description
This is my own project about a simple example of a CRUD applied to a Veterinary Clinic. It will contain entities such as pet, owner and veterinarian, with relationships among them. Its purpose is to help me having an introduction to the backend's world. 

## Technologies 
- Front-end: Vue.js 
- Back-end: Node.js

## ER Diagram

```mermaid
erDiagram
    PETS |{--|| OWNER : have
    PETS {
        int id
        string name
        string breed
        int age
        string pet_type
        int id_owner
    }
    OWNER {
        int id
        string name
        int age
    }
    VETERINARIAN ||--|{ PETS : attends
    VETERINARIAN {
        string name
        string speciality
        string professional_license
        int id_pet
    }
```