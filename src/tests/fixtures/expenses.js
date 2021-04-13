import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    notes: 'Gym',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    notes: 'April',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'day').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    notes: 'Hair cut',
    amount: 4500,
    createdAt: moment(0).add(4, 'day').valueOf()
}];
