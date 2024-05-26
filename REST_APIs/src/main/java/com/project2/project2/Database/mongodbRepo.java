package com.project2.project2.Database;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface mongodbRepo extends MongoRepository<usersDocModel, String> {
}
