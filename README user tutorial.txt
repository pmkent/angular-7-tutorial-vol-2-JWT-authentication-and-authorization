User Application Structure

user/
|___ src/
|    |___ app/
|    |    |___ page/
|    |    |    |___ login/
|    |    |    |    |___ sign-in/
|    |    |    |    |    |___sign-in.component.html
|    |    |    |    |    |___sign-in.component.ts
|    |    |    |___ user/
|    |    |    |    |___ list-user/
|    |    |    |    |    |___list-user.component.html
|    |    |    |    |    |___list-user.component.ts
|    |    |___ util/
|    |    |    |___auth.guard.ts
|    |    |___app-material.module.ts
|    |    |___app-routing.module.ts
|    |    |___app.component.css
|    |    |___app.component.html
|    |    |___app.component.spec.ts
|    |    |___app.component.ts
|    |    |___app.module.ts


Commands:

Volume 1:

ng new user

ng serve --open

npm install --save @angular/material @angular/cdk @angular/animations

ng add @angular/material

ng generate module app-material --flat --module=app

Volume 2:

ng generate component page/login/sign-in --spec=false -s --module=app
ng generate component page/user/list-user --spec=false -s --module=app
ng generate guard util/auth --spec=false --module=app