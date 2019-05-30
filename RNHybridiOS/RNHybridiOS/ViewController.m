//
//  ViewController.m
//  RNHybridiOS
//
//  Created by cc on 2019/5/30.
//  Copyright © 2019 cc. All rights reserved.
//

#import "ViewController.h"
#import "RNPageController.h"

@interface ViewController ()
- (IBAction)onClick:(id)sender;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (IBAction)onClick:(id)sender {
    RNPageController *next = [[self storyboard] instantiateViewControllerWithIdentifier:@"RNPage"];
    [self presentViewController:next animated:true completion:nil];
}
@end
