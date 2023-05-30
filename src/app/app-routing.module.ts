import { BakerLibraryComponent } from "./baker-library/baker-library.component";
import { BakerComponent } from "./baker/baker.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BakerHomeComponent } from "./baker/baker-home/baker-home.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/baker", pathMatch: "full" },
  { path: "baker",
    component: BakerComponent,
    children: [{ path: "", component: BakerHomeComponent}]
  },
  { path: "baker-library", component: BakerLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
