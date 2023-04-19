```mermaid
    classDiagram
    
    class Zebra{
        int numOfStripes
        float tailLength
        gallop()
    }
    class Animal{
        int numOfLegs
        String color
        floar rateOfMovement
        eat(String name)
        float sleep()
        bool reproduce(String name)
    }
    Animal <|-- Zebra