import { makeAutoObservable } from "mobx";
import type { restorantsT, State } from "../../../types";
import { restorant as initData } from "../../../mock";

export class RestaurantStore {
  private _state: State = "pending";
  get state(): State {
    return this._state;
  }
  set state(value: State) {
    // if (value === "pending") {
    //   nprogressInstance.start();
    // } else {
    //   nprogressInstance.done();
    // }
    this._state = value;
  }

  get isLoading() {
    return this.state === "pending";
  }

  restorants: restorantsT = initData;

  constructor() {
    makeAutoObservable(this);
  }

  init = async () => {
    console.log("123");
  };
}

const restaurantStore = new RestaurantStore();
export default restaurantStore;
