// Modules in Angular
    // In the end, you DONT specifiy on a per-component level. Example: with standalone components, if you use the header component, user component, etc. in your template, you have to specify that you want to use them, by importing them within your component.

    // instead of that, with MODULES, you can create a module that simply COMBINES all the compoenents that need to work with eachother, so your @decorator gets leaner since you dont need the imports array.
    // The downside of this approach, is that even though your decorator gets leaner, its not obvious which component uses which component, and you have to create those extra modules.