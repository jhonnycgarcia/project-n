class BaseError extends Error {
    constructor(message, status = 500, name = 'BaseError') {
        super(message);
        this.name = name;
        this.message = message;
        this.status = status;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
                // stacktrace: this.stack
        }
    }
}

class ValidationError extends BaseError {
    constructor(message, status = 500, name = 'ValidationError') { super(message, status, name); }
}

class PermissionError extends Error {
    constructor(message, status = 500, name = 'PermissionError') { super(message, status, name); }
}
class DatabaseError extends Error {
    constructor(message, status = 500, name = 'DatabaseError') { super(message, status, name); }
}
module.exports = {
    ValidationError,
    PermissionError,
    DatabaseError
}