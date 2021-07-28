## Components
App // data fetch here
    Filters (callback/setters)
    Pet Browswer (pets, onAdoptPet)
        Pet (pet, onAdoptPet)

## States
-State for Animal Filter (filters.type) (passed as onChangeType)
-State for pets to display 

## Data Fetch
- 'http://localhost:3001/pets' for all
- add  ex. /pets?type=cat for others

## Deliverables:
[X] Change animal type filter (onChangeType)
[X] Click find pets => see pets of the type specified in the filter (onFindPetsClick); pet: name, type, age, and weigtht, gender symbol; button based on isAdopted
[X] Click to adopt pet (callback onAdoptPet(id))
