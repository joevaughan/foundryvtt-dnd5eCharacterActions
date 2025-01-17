// declare global {
declare namespace Game {
  interface ModuleData<T> {
    api?: Record<string, any>;
  }
}

declare namespace ActorSheet {
  interface Options {
    blockActionsTab?: boolean;
  }
}
// }
