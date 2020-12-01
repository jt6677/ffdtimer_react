package controllers

import (
	"encoding/json"
	"log"
	"net/http"
)

type ResponseJSON struct {
	Response string `json:"response"`
	ErrorMSG string `json:"errormsg"`
}

func respondJSON(resp string, errorMSG string, w http.ResponseWriter) {
	respmsg := &ResponseJSON{Response: resp, ErrorMSG: errorMSG}
	err := json.NewEncoder(w).Encode(respmsg)
	if err != nil {
		log.Println(err)
	}
}