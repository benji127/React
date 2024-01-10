const library={
    render: ()=>console.log('Rendered....'),
    save: ()=>console.log('Saved ...'),
    update: () =>console.log('Updated....'),
    push: ()=>console.log('Push......')
}

library.push()
library.render()
library.save()

const{render,push}=library

render()
push()