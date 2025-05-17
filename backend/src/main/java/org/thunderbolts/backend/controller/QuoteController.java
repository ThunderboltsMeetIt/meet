package org.thunderbolts.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thunderbolts.backend.model.Quote;
import org.thunderbolts.backend.repository.QuoteRepository;
import org.thunderbolts.backend.service.QuoteService;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {
    @Autowired
    private QuoteService quoteService;

    @GetMapping
    public List<Quote> getAllQuotes() {
        return quoteService.findAll();
    }

    @GetMapping("/random")
    public ResponseEntity<Quote> getRandomQuote() {
        Quote quote = quoteService.getRandom().orElse(null);
        if(quote == null) new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(quote, HttpStatus.OK);
    }

    @GetMapping("/daily")
    public ResponseEntity<Quote> getDaily() {
        Quote quote = quoteService.getQuoteOfDay();
        if(quote == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<>(quote, HttpStatus.OK);
    }
}
