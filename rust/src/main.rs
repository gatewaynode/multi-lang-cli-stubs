use clap::{App, Arg};

fn main() {
    let matches = App::new("cli-stub")
        .version("0.1")
        .about("This is a just a stub of a command line app")
        .author("gatewaynode")
        .arg(
            Arg::with_name("verbose")
                .short("v")
                .long("verbose")
                .help("Output more information")
                .takes_value(false),
        )
        .get_matches();
    let mut verbose = false;

    if matches.is_present("verbose") {
        verbose = true;
    }
    println!("You entered {}", verbose);
}
