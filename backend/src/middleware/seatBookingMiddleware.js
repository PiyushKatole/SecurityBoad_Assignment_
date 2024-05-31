const findConsecutiveSeats = (seats, count) => {
    const consecutiveSeats = [];
    for (let i = 0; i < seats.length; i++) {
        if (!seats[i].isBooked) {
            consecutiveSeats.push(seats[i]);
            if (consecutiveSeats.length === count) {
                return consecutiveSeats;
            }
        } else {
            consecutiveSeats.length = 0; 
        }
    }
    return null;
};

module.exports = {findConsecutiveSeats}