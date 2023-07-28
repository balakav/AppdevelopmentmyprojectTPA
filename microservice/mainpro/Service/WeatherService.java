package com.example.bala.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class WeatherService {

    private final String apiKey = "a22de587ac9c3e8e729cc841778f0a34";
   // private final String apiKey = "0bc5a852111e46f14e3d270e2943af45";
    private final String apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&units=metric";

    public String getCurrentWeather(String city) throws IOException {
        String url = String.format(apiUrl, city, apiKey);
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);

        // Parse the JSON response and extract the temperature value
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(result);
        double temperature = root.path("main").path("temp").asDouble();

        return "Temperature in " + city + " is " + temperature + "°C";
    }
}