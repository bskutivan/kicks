const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Performance' },
    { name: 'Casual' },
    { name: 'Dress' },
    // { name: 'Mens'},
    // { name: 'Womens'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Addidas Distance',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'addidasM1.jpg',
      category: [categories[0]._id],
      price: 89.99,
      quantity: 500
    },
    {
      name: 'Addidas Air',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'addidasM2.jpg',
      category: [categories[0]._id],
      price: 121.99,
      quantity: 500
    },
    {
      name: 'Addidas Street',
      category: [categories[0]._id],
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 97.99,
      quantity: 20
    },
    {
      name: 'Addidas Inferno',
      category: [categories[0]._id],
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 93.99,
      quantity: 50
    },
    {
      name: 'Addidas Sprint',
      category: [categories[0]._id],
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'addidasW1.jpg',
      price: 114.99,
      quantity: 100
    },
    {
      name: 'Addidas Stream',
      category: [categories[0]._id],
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'addidasW2.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Addidas Height',
      category: [categories[0]._id],
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'addidasW3.jpg',
      price: 129.99,
      quantity: 30
    },
    {
      name: 'Addidas Rush',
      category: [categories[0]._id],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'addidasW4.jpg',
      price: 89.99,
      quantity: 100
    },
    {
      name: 'Nike Jordans',
      category: [categories[0]._id],
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'nikeM1.jpg',
      price: 211.99,
      quantity: 1000
    },
    {
      name: 'Nike Race',
      category: [categories[0]._id],
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'nikeM2.jpg',
      price: 202.99,
      quantity: 1000
    },
    {
      name: 'Nike Cover',
      category: [categories[0]._id],
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'nikeM3.jpg',
      price: 127.99,
      quantity: 100
    },
    {
      name: 'Nike Air',
      category: [categories[0]._id],
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'nikeM4.jpg',
      price: 119.99,
      quantity: 600
    },
    {
        name: 'Nike Sprint',
        category: [categories[0]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'nikeW1.jpg',
        price: 110.99,
        quantity: 600
    },
    {
        name: 'Nike Vibe',
        category: [categories[0]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'nikeW2.jpg',
        price: 149.99,
        quantity: 600
    },
    {
        name: 'Nike Rush',
        category: [categories[0]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'nikeW3.jpg',
        price: 189.99,
        quantity: 600
    },
    {
        name: 'Nike Classic',
        category: [categories[0]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'nikeW4.jpg',
        price: 109.99,
        quantity: 600
    },
    {
        name: 'Birk Earth',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkM1.jpg',
        price: 149.99,
        quantity: 600
    },
    {
        name: 'Birk Air',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkM2.jpg',
        price: 139.99,
        quantity: 600
    },
    {
        name: 'Birk Shadow',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkM3.jpg',
        price: 189.99,
        quantity: 600
    },
    {
        name: 'Birk Classic',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkW1.jpg',
        price: 109.99,
        quantity: 600
    },
    {
        name: 'Birk Light',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkW2.jpg',
        price: 89.99,
        quantity: 600
    },
    {
        name: 'Birk Grounded',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'birkW3.jpg',
        price: 109.99,
        quantity: 600
    },
    {
        name: 'Chuck Night',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksM1.jpg',
        price: 109.99,
        quantity: 600
    },
    {
        name: 'Chuck Toned',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksM2.jpg',
        price: 100.99,
        quantity: 600
    },
    {
        name: 'Chuck Hightop',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksM3.jpg',
        price: 100.99,
        quantity: 600
    },
    {
        name: 'Chuck Funky',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksW1.jpg',
        price: 100.99,
        quantity: 600
    },
    {
        name: 'Chuck Classic',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksW2.jpg',
        price: 139.99,
        quantity: 600
    },
    {
        name: 'Chuck Chrome',
        category: [categories[1]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'chucksW3.jpg',
        price: 179.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Jaguar',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooM1.jpg',
        price: 1109.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Panther',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooM2.jpg',
        price: 1009.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Classic',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooM3.jpg',
        price: 1409.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Wedge',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooW1.jpg',
        price: 1109.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Flat',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooW2.jpg',
        price: 1399.99,
        quantity: 600
    },
    {
        name: 'Jimmy Choo Pumpy',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'jimmChooW3.jpg',
        price: 1000.99,
        quantity: 600
    },
    {
        name: 'Louboutin lancer',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinM1.jpg',
        price: 1109.99,
        quantity: 600
    },
    {
        name: 'Louboutin Jester',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinM2.jpg',
        price: 1409.99,
        quantity: 600
    },
    {
        name: 'Louboutin Bard',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinM3.jpg',
        price: 1799.99,
        quantity: 600
    },
    {
        name: 'Louboutin Queen',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinW1.jpg',
        price: 1609.99,
        quantity: 600
    },
    {
        name: 'Louboutin Dutchess',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinW2.jpg',
        price: 2599.99,
        quantity: 600
    },
    {
        name: 'Louboutin Show Stopper',
        category: [categories[2]._id],
        description:
          'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
        image: 'louboutinW3.jpg',
        price: 3609.99,
        quantity: 600
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
