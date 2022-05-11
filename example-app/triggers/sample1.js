const listRecipes = (z, bundle) => {
    z.console.log('hello from a console log!');
    const promise = z.request('https://jsonplaceholder.typicode.com/posts');
    return promise.then((response) => response.json);
  };
  
  module.exports = {
    key: 'recipe',
    noun: 'Recipe',
    display: {
      label: 'New Recipe',
      description: 'Trigger when a new recipe is added.'
    },
    operation: {
      perform: listRecipes,
      sample: 
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },    
    }
  };