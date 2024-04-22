# Backend-baserad webbuteckling | Moment 3.2 Uppgift 1

I detta repo finns koden till ett REST-API som är byggt med Mongoose & Express och kopplat till MongoDB.
API'et är skapat för att lagra och hantera tidigare arbetserfarenheter, gundläggande funktionalitet för CRUD-metoder har implementerats.

## Länk till API
https://backend-moment3-2-1.onrender.com/workexperiences

## Användning
| Metod | Ändpunkt | Beskrivning |
|-------|----------|-------------|
| GET | /workexperiences | Hämta alla arbetserfarenheter. |
| POST | /workexperiences | Lägg till en arbetserfarenhet. |
| PUT | /workexperiences/id | Uppdatera befintlig arbetserfarenhet baserat på det id som skickas med som paramter. |
| DELETE | /workexpeiences/id | Radera befintlig arbetserfarenhet baserat på det id som skickas med som paramter. |

Ett arbetserferenhets-objekt skickas och returneras med följande struktur (enddate måste inte vara ifyllt):
```
{
  "companyname": "SF Bio",
  "location": "Linköping",
  "jobtitle": "Skiftledare",
  "startdate": "2017-09-10",
  "enddate": "2020-10-12",
  "description": "Skötte driften."
}
```
