package org.thunderbolts.backend.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private long id;

    @ManyToMany
    private Set<Quote> likedQuotes;

    @ManyToMany
    private Set<Quote> seenQuotes = new HashSet<>();


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Set<Quote> getLikedQuotes() {
        return likedQuotes;
    }

    public void setLikedQuotes(Set<Quote> likedQuotes) {
        this.likedQuotes = likedQuotes;
    }

    public Set<Quote> getSeenQuotes() {
        return seenQuotes;
    }

    public void setSeenQuotes(Set<Quote> seenQuotes) {
        this.seenQuotes = seenQuotes;
    }
}
