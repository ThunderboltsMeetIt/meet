package org.thunderbolts.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.thunderbolts.backend.model.User;
import org.thunderbolts.backend.service.UserService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    @PostMapping("/{userId}/like/{quoteId}")
    public ResponseEntity<?> likeQuote(@PathVariable long userId, @PathVariable long quoteId) {
        boolean success = userService.likeQuote(userId, quoteId);
        return success ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    @PostMapping("/{userId}/seen/{quoteId}")
    public ResponseEntity<?> markQuoteAsSeen(@PathVariable long userId, @PathVariable long quoteId) {
        boolean success = userService.markQuoteAsSeen(userId, quoteId);
        return success ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
