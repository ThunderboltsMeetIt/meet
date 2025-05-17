package org.thunderbolts.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.thunderbolts.backend.model.Quote;
import org.thunderbolts.backend.repository.QuoteRepository;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class QuoteService {
    private final QuoteRepository quoteRepository;

    private Instant quoteOfDayInstant;
    private Quote quoteOfDay;

    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;


    }

    public Quote getQuoteOfDay() {
        Instant now = Instant.now();
        if(quoteOfDayInstant != null && quoteOfDayInstant.isBefore(now.minus(1, ChronoUnit.DAYS))) return quoteOfDay;

        quoteOfDayInstant = now;
        quoteOfDay = getRandom().orElse(null);

        if(quoteOfDay == null) quoteOfDayInstant = null;
        return quoteOfDay;
    }

    public Optional<Quote> getRandom() {
        List<Quote> quotes = quoteRepository.findAll();
        if(quotes.isEmpty()) {
            return Optional.empty();
        }

        int index = ThreadLocalRandom.current().nextInt(quotes.size());
        return Optional.of(quotes.get(index));
    }

    public List<Quote> findAll() {
        return quoteRepository.findAll();
    }


}
