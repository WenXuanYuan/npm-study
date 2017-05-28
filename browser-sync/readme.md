Keep multiple browsers & devices in sync when building websites.
[https://browsersync.io/docs/api](https://browsersync.io/docs/api)

.create(name)
Create a Browsersync instance

.get(name)
Get a single instance by name

.has(name)
Check if an instance has been created

.init(config, cb)
Start the Browsersync service, This will launch a server, proxy or start the snipchat mode depending on your use-case.
[config: https://browsersync.io/docs/options](https://browsersync.io/docs/options)

.reload(arg)            // arg: String|Array|Object
The file or files will be reload

.stream(opts)
The stream method returns a transform stream and can act once or on many files.

.notify(msg, timeout)
Helper methods for browser notifications

.exit()
This method will close any running server, stop file watching & exit the current process.

.watch(patterns, opts, fn)
Stand alone file-watcher, Use this along with Browsersync to create your own, minimal build system.
[opts: https://github.com/paulmillr/chokidar#getting-started](https://github.com/paulmillr/chokidar#getting-started)

.pause()
Method to pause file change events

.resume()
Method to resume paused watchers

.emitter
The internal Event Emitter used by the running Browsersync instance(if there is one). You can use this to emit youe own events, such as changed files, logging etc.

.active
A simple true/false that you can used to determine if there`s a currently-running Browsersync instance.

.paused
A simple true/false flag to determine if the current instance is paused.

.sockets
Access to client-side socket for emitting events.