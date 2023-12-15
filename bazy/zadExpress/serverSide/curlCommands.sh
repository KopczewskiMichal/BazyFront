curl 127.0.0.1:8080/products  #Pobranie wszystkich produktów z bazy

#Aby poniższe poszło należy zmienić plik insertedFile na taki którego jeszcze nie ma w bazie.
curl -X POST -H "Content-Type: application/json" -d @insertedFile.json http://localhost:8080/products

curl -X DELETE http://localhost:8080/products/657cd15e54a36b3265d1ae35  #działa, ale pamiętajmy o podawaniu prawidłowego id
