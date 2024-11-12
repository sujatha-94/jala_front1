'use strict';

try {
    undeclaredVariable = 10; // This will cause an error because the variable is not declared
} catch (error) {
    console.error('Error:', error.message);
}
