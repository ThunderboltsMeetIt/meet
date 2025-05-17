package org.thunderbolts.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thunderbolts.backend.model.Quote;
import org.thunderbolts.backend.model.User;
import org.thunderbolts.backend.repository.QuoteRepository;
import org.thunderbolts.backend.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuoteRepository quoteRepository;

    public boolean likeQuote(long userId, long quoteId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Quote> quoteOpt = quoteRepository.findById(quoteId);

        if (userOpt.isPresent() && quoteOpt.isPresent()) {
            User user = userOpt.get();
            Quote quote = quoteOpt.get();
            user.getLikedQuotes().add(quote);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean markQuoteAsSeen(long userId, long quoteId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Quote> quoteOpt = quoteRepository.findById(quoteId);

        if (userOpt.isPresent() && quoteOpt.isPresent()) {
            User user = userOpt.get();
            Quote quote = quoteOpt.get();
            user.getSeenQuotes().add(quote);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
